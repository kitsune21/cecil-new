import styled from 'styled-components'
import {
  ColorProps,
  TextColor,
  InputColorProps,
  PhotoAlbumProps,
  PhotoProps,
} from '../Types'

export const Computer = styled.div`
  padding: 20px;
  border: 2px solid black;
  border-bottom: none;
  border-radius: 12px 12px 0 0;
  background-color: beige;
  height: 85vh;
  margin: 10px 10px 0 10px;
`

export const ComputerMonitor = styled.div`
  height: 100%;
  background-color: ${(props: ColorProps) =>
    `rgb(${props.backgroundColor}, ${props.backgroundColor}, ${props.backgroundColor})`};
  overflow-y: auto;
  border: 1px solid black;
  border-radius: 8px;
`

export const ComputerBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: beige;
  height: 50px;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  border-left: 2px solid black;
  border-radius: 0 0 12px 12px;
  margin: 0 10px 0 10px;
  font-family: EBGaramond;
`

export const KnobRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  width: 90%;
`

export const Text = styled.p`
  color: rgb(0, ${(props: TextColor) => props.textColor}, 0);
  margin: 0;
  padding-left: 10px;
  padding-top: 5px;
  font-family: Roboto Condensed;
`

export const PromptBox = styled.form`
  margin-top: 5px;
  margin-bottom: 10px;
  width: 100%;
`

export const PromptInput = styled.input`
  border: none;
  background-color: ${(props: InputColorProps) =>
    `rgb(${props.backgroundColor}, ${props.backgroundColor}, ${props.backgroundColor})`};
  color: rgb(0, ${(props: InputColorProps) => props.textColor}, 0);
  margin-left: 5px;
  width: 90%;

  &:focus {
    outline: none;
  }
`

export const PromptPreText = styled.label`
  color: rgb(0, ${(props: TextColor) => props.textColor}, 0);
  margin-left: 10px;
`

export const PromptLink = styled.a`
  color: rgb(
    0,
    ${(props: TextColor) => props.textColor},
    ${(props: TextColor) => props.textColor}
  );
  &:hover {
    color: rgb(0, ${(props: TextColor) => props.textColor}, 0);
  }
`

export const ScreenshotButton = styled.button`
  border: none;
  color: rgb(
    0,
    ${(props: TextColor) => props.textColor},
    ${(props: TextColor) => props.textColor}
  );
  background-color: ${(props: InputColorProps) =>
    `rgb(${props.backgroundColor}, ${props.backgroundColor}, ${props.backgroundColor})`};
  cursor: pointer;
  margin: 0;
  padding-left: 10px;
  padding-top: 5px;
  font-family: Roboto Condensed;
  text-decoration: underline;
  &:hover {
    color: rgb(0, ${(props: TextColor) => props.textColor}, 0);
  }
`

export const ScreenshotViewerDialog = styled.dialog`
  position: absolute;
  top: 8%;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid rgb(0, ${(props: TextColor) => props.textColor}, 0);
  border-radius: 10px;
  background-color: ${(props: InputColorProps) =>
    `rgb(${props.backgroundColor}, ${props.backgroundColor}, ${props.backgroundColor})`};

  @media (max-width: 500px) {
    width: 30%;
  }

  @media (max-width: 750px) {
    width: 40%;
  }

  @media (min-width: 751px) {
    width: 50%;
  }
`

export const ScreenshotImage = styled.img`
  display: block;
  @media (max-width: 500px) {
    width: 10rem;
  }

  @media (max-width: 750px) {
    width: 20rem;
  }

  @media (min-width: 751px) {
    width: 50rem;
  }
`

export const ScreenshotCarousel = styled.div`
  display: flex;
  overflow-x: auto;
`

export const ScreenshotCarouselItem = styled.div`
  margin: 20px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 1px;
`

export const ScreenshotDescription = styled.p`
  color: rgb(0, ${(props: TextColor) => props.textColor}, 0);
`

export const PhotoAlbumCover = styled.div`
  position: absolute;
  width: ${(props: PhotoAlbumProps) => (props.isDraggedOpen ? '50%' : '250px')};
  height: ${(props: PhotoAlbumProps) =>
    props.isDraggedOpen ? '45rem' : '25px'};
  bottom: ${(props: PhotoAlbumProps) =>
    props.isDraggedOpen ? '1rem' : '-10px'};
  left: ${(props: PhotoAlbumProps) => (props.isDraggedOpen ? '1rem' : '-5px')};
  padding: 5px;
  background-color: sienna;
  ${(props: PhotoAlbumProps) =>
    props.isDraggedOpen
      ? `
      border: 2px solid black;
      border-radius: 5px;
    `
      : `
      border: 2px solid black;
      border-radius: 0 5px 0 0;
      border-bottom: none;
      border-left: none;
    `}
  & h2 {
    text-align: center;
    color: gold;
  }

  transition: all 0.3s ease;
`

export const FrontCoverDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Pages = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ivory;
  height: 98%;
  width: 98%;
`

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 98%;
  overflow-y: auto;
`

export const NavigatePages = styled.div`
  position: absolute;
  bottom: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: none;
  border: 2px solid ivory;
  border-radius: 5px;
`

export const NavigateButton = styled.button`
  border: none;
  background-color: ivory;
  cursor: pointer;
`

export const CoverButton = styled.button`
  color: gold;
  padding: 0;
  margin: 0;
  float: right;
  background-color: sienna;
  border: none;
  cursor: pointer;
`

export const PhotoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: none;
`

export const Photo = styled.img`
  width: 38%;
  align-self: center;
  border: 2px solid black;
  border-radius: 2px;
  &:hover {
    transform-origin: ${(props: PhotoProps) =>
      props.index > 0 || props.pictureId === props.lastId ? 'center' : 'top'};
    transform: scale(2.3);
    border: 1px solid black;
  }
  transition: all 0.2s ease;
`

export const FrontPhoto = styled.img`
  width: 20rem;
  border: 2px solid gold;
  border-radius: 4px;
  align-self: center;
`

export const PhotoDescription = styled.p`
  width: 80%;
  align-self: center;
`
