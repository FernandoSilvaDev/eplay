import { useState } from 'react'

import Section from '../Section'
import Play from '../../assets/img_logo/play.png'
import Zoom from '../../assets/img_logo/zoom.png'
import Close from '../../assets/img_logo/fechar.png'
import { Action, Item, Items, Modal, ModalContent } from './styles'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

//Função para criar a capa da Galeria
const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  //Função para aparecer o icone Play
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return Zoom
    return Play
  }

  // Função para o fechamento da modal com o clique em qualquer parte da tela
  const closeMOdal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique aqui para maximar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      {/* If Else de quando clicar torna a Modal visivel */}
      <Modal className={modal.isVisible ? 'is-visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={Close}
              alt="Icone de fechar"
              // Para fechar o modal com o clique em qualquer parte da tela
              onClick={closeMOdal}
            />
          </header>
          {/* If ? ou Else : para se for imagem ou video */}
          {/* iframe é para rederizar videos */}
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe src={modal.url} />
          )}
        </ModalContent>
        <div
          // Para fechar o modal com o clique em qualquer parte da tela
          onClick={() => {
            closeMOdal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
