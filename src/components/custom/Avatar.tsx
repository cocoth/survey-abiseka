// Di komponen React
import Image from 'next/image'


interface AvatarProps {
  username: string
  className?: string
  width?: number
  height?: number
  alt?: string
}

export default function Avatar(data: AvatarProps) {
  const url = `https://api.dicebear.com/8.x/shapes/png?seed=${data.username}`

  return (
    <Image
      src={url}
      width={data.width ? data.width : 100}
      height={data.height ? data.height : 100}
      alt={data.alt ? data.alt : `Avatar for ${data.username}`}
      className={data.className ? data.className : 'h-10 w-10 ring shadow-md shadow-black ring-black rounded-full'}
    />
  )
}
