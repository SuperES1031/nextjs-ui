import HTMLContent from '@components/atoms/HTMLContent'
import styles from './PostBody.module.scss'

export default function PostBody({ post }) {

  return (
    <div className='max-w-[1300px] m-auto px-4 py-20'>
      <HTMLContent content={post.content?.rendered} />
    </div>
  )
}