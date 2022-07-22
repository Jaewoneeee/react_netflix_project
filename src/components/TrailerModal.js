import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';

const TrailerModal = (props) => {

    //const { trailer } = useSelector((state) => state.movies )
    // console.log('여기', props.trailer[0].key)
    // const test = props.trailer[1]
    // console.log(test)

    const opts = {
        height: '400',
        width: '765',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      }


    return (
        <Modal
            {...props}
            
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <YouTube videoId={props.trailer[0].key}  opts={opts}/>
            </Modal.Body>
            {/* <Modal.Footer>
            <Button variant="dark" onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    )
}

export default TrailerModal