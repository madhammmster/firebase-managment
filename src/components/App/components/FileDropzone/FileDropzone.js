import React from 'react';
import Dropzone from "react-dropzone";
import FilePreview from "./FilePreview";
import {Grid, Icon} from "semantic-ui-react";

import './FileDropzone.scss';

class FileDropzone extends React.Component {

    componentWillMount = () => {
        const {input} = this.props;

        if (input.value) {
            this.setState({files: input.value, disabled: true});
        } else {
            this.setState({files: [], disabled: false});
        }


    }

    onDrop = (files) => {
        const {input} = this.props;
        const allFiles = this.state.files;

        files.forEach((file) => {
            allFiles.push(file);
        })

        input.onChange(allFiles)
        this.setState({files: allFiles, disabled: true});
    };


    onDelete = (file) => {
        const {input} = this.props;
        let {files} = this.state;

        files = files.filter((element) => {
            return element.name !== file.name
        });

        input.onChange(files)
        this.setState({files: files, disabled: false});
    }

    render() {
        const {name, input} = this.props;
        const {disabled} = this.state;
        return (
            <Grid>
                <Grid.Row>
                    <Grid columns={6}  verticalAlign='middle'>
                        <Grid.Column >
                            <div className="dropzone-container">
                                <Dropzone
                                    className={'dropzone'}
                                    disabledClassName={'disabled'}
                                    name={name}
                                    disabled={disabled}
                                    multiple={false}
                                    onDrop={this.onDrop}
                                >
                                    <Icon name='plus' size='big'/>
                                </Dropzone>
                            </div>
                        </Grid.Column>
                        {
                            input.value && input.value.map((file) => (<FilePreview
                                key={file.name}
                                file={file}
                                onDelete={this.onDelete}
                            />))
                        }
                    </Grid>
                </Grid.Row>
            </Grid>
        );
    }
}

export default FileDropzone;