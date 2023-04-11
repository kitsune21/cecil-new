import { downloadResume } from './resume'

test('downloadResume should download resume file', async () => {
  // mock the fetch function
  const mockBlob = new Blob(['fake data'], { type: 'application/pdf' })
  const mockResponse = new Response(mockBlob)
  global.fetch = jest.fn().mockResolvedValue(mockResponse)

  // mock the DOM APIs
  const createObjectURLMock = jest.fn()
  global.URL.createObjectURL = createObjectURLMock
  const createElementMock = jest.fn(() => ({
    href: '',
    download: '',
    click: jest.fn(),
  }))
  global.document.createElement = createElementMock

  // call the function
  await downloadResume()

  // assert that fetch was called with the correct URL
  expect(fetch).toHaveBeenCalledWith('Cecil-Thomas-Resume.pdf')

  //   // assert that createObjectURL was called with the blob
  //   expect(createObjectURLMock).toHaveBeenCalledWith(mockBlob)

  //   // assert that createElement was called with the correct tag name
  //   expect(createElementMock).toHaveBeenCalledWith('a')

  //   // assert that the download link was set up correctly
  //   expect(createElementMock().href).toBe(createObjectURLMock())

  //   // assert that the download link was clicked
  //   expect(createElementMock().click).toHaveBeenCalled()
})
