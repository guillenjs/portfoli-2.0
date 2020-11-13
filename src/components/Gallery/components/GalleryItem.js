import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

const GalleryItem = ({id, source, thumbnail, caption, description, stack, demo, position, toggleLightbox}) => {

    const onClick = useCallback((e) => {
        e.preventDefault()
        toggleLightbox(position)
    }, [position, toggleLightbox]);

    const renderDemo = () => {
        if(demo !== ""){
            return <a href={demo} target="_blank">| Demo</a>
        }
    }
    console.log(demo)

    return (<article key={id} className="6u 12u$(xsmall) work-item">
        <a
        className="image fit thumb"
        href={source}
        target="_blank" 
        // onClick={onClick}
        >
        <img src={thumbnail} alt="thumbnails for projects"/>
        </a>

        {/* <h3>{caption}</h3> */}
        <p>{description}
            <br></br> 
            <br></br>
            <b>Tech Stack</b>: {stack}
            <br></br>
            <a href={source} target="_blank" alt="link to project github" >Github</a>  {renderDemo()}
          
            </p>
            
    </article>)
};

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  toggleLightbox: PropTypes.func.isRequired
}

export default GalleryItem