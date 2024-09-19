import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const DropZone = ({ onFileUpload }) => {
    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onFileUpload(reader.result); // Передача URL изображения в родительский компонент
            };
            reader.readAsDataURL(file);
        }
    }, [onFileUpload]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*', // Ограничение только на изображения
    });

    return (
        <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Перетащите изображение сюда...</p>
            ) : (
                <p>Перетащите изображение сюда или нажмите, чтобы выбрать файл</p>
            )}
        </div>
    );
};

export default DropZone;