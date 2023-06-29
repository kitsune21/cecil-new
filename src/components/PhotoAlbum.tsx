import React, {useState} from 'react'
import { PhotoAlbumCover, Pages, NavigatePages, Photo, FrontPhoto, CoverButton, NavigateButton, FrontCoverDiv, PageContent, PhotoDiv, PhotoDescription } from './styledComponents'
import CecilStreet from '../pictures/finding-my-street.jpg'
import Pictures from '../pictures/pictures.json'

const PhotoAlbum = () => {
    const [isDraggedOpen, setIsDraggedOpen] = useState(false)
    const [showPages, setShowPages] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)
    const PictureList = Pictures
    const PicturesPerPage = 2
    const NumberOfPages = PictureList.length / PicturesPerPage

    function calculatePicturesForCurrentPage() {
        const Offset = currentPage * PicturesPerPage
        return PictureList.slice(Offset, Offset + PicturesPerPage)
    }

    function navigateNextPage() {
        if(currentPage + 1 < NumberOfPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    function navigatePreviousPage() {
        if(currentPage  > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    function handleCloseBook() {
        setCurrentPage(0)
        setIsDraggedOpen(false)
        setShowPages(false)
    }

    return(
        <PhotoAlbumCover isDraggedOpen={isDraggedOpen}>
            {
                !isDraggedOpen ?
                <CoverButton onClick={() => setIsDraggedOpen(!isDraggedOpen)}>Click to view photos</CoverButton>
                :
                <FrontCoverDiv>
                    <CoverButton onClick={() => setIsDraggedOpen(!isDraggedOpen)}>Click to close</CoverButton>
                    <h2>Photo Album</h2>
                    <FrontPhoto src={CecilStreet} />
                    <h2>By Cecil</h2>
                    <CoverButton onClick={() => setShowPages(true)}>Open</CoverButton>
                </FrontCoverDiv>
            }
            {
                showPages ?
                <Pages>
                    <PageContent>
                        {
                            calculatePicturesForCurrentPage().map((picture, i) =>
                                <PhotoDiv key={picture.id}>
                                    <Photo key={picture.id} src={require(`../pictures/${picture.location}`)} loading='lazy' index={i} pictureId={picture.id} lastId={PictureList[PictureList.length - 1].id}/>
                                    <PhotoDescription>{picture.description}</PhotoDescription>
                                </PhotoDiv>    
                            )
                        }
                        <NavigatePages>
                            <NavigateButton onClick={navigatePreviousPage}>{ currentPage > 0 ? "Previous Page" : "" }</NavigateButton>
                            <NavigateButton onClick={handleCloseBook}>Close</NavigateButton>
                            <NavigateButton onClick={navigateNextPage}>{ currentPage < NumberOfPages - 1 ? "Next Page" : "" }</NavigateButton>
                        </NavigatePages>
                    </PageContent>
                </Pages>
                : null
            }
        </PhotoAlbumCover>
    )
}

export default PhotoAlbum