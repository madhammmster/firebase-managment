import React from 'react';
import {Image, Grid, Segment, Icon} from "semantic-ui-react";


import './FilePreviewStyles.scss';

class FilePreview extends React.Component {


    render() {

        const {file} = this.props;
        return (

            <Grid.Column>
                <Segment
                    className='file-previev-container'
                    onClick={()=>{this.props.onDelete(file)}}
                >
                    <Image size='tiny' src={file.preview}/>

                    <div className="file-preview-fader"></div>
                    <div className="file-preview-delete-icon">
                        <Icon name='delete' size='big'/>
                    </div>
                </Segment>
            </Grid.Column>


        )
    }
}


export default FilePreview