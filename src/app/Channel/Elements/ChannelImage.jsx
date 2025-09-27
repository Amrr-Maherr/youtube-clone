function ChannelImage({src,title,className}) {
    return (
        <div className={className ? className : ""}>
            <img className="w-full h-full " src={src} alt={title} />
        </div>
    )
}

export default ChannelImage
