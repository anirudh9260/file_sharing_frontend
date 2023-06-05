import React from 'react'
import FileItem from './FileItem'
import PropTypes from 'prop-types'

const FileList = (props) => {
    return (
        <div className="container">
            <h3>Files List:</h3>
            {props.files.map(file => {
                return (
                    <FileItem
                        file={file}
                        key={file.id}
                        onDelete={props.onDelete}
                    />
                )
            })}
        </div>
    )
}

export default FileList

FileList.propTypes = { files: PropTypes.object, onDelete: PropTypes.func };
// FileList.propTypes = { files: PropTypes.object.isRequired, onDelete: PropTypes.func };
FileList.defaultProps = {files : "Anirudh"};