

export const convertBufferToBase64 = (bufferData)=>{

    if(!bufferData || !bufferData.data) return null;

    const uint8Array = new Uint8Array(bufferData.data);
    const base64Img = btoa(
        uint8Array.reduce((data,byte)=> data+String.fromCharCode(byte),'' )
    );

    return `data:image/png;base64,${base64Img}`;

};