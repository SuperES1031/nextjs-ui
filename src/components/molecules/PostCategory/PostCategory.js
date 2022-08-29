import { getCategories } from '@functions/wordpress/fetchData';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './PostCategory.module.scss';

export default function PostCategory() {
  const { categories, isloading } = getCategories()

  const router = useRouter()
  const asPath = router ? router.pathname : '/'
  const current = asPath.split('blog')

  return (
    <div className='h-fit'>
      <div className={styles.filter}>
        <div className={cn('pr-2', styles.menu)}>
          <Link href='/blog'>
            <a className={cn(current[current.length - 1] === '' ? 'cta text-lg py-1.5 md:py-2 px-3 md:px-4' : styles.link)}>All</a>
          </Link>
        </div>
        {Array.isArray(categories) && categories.map((category, index) => (
          <div key={index} className={cn(styles.item, styles.menu)}>
            <Link href={`/blog/${category.slug}`}>
              <a className={cn(current[current.length - 1] === category.slug ? 'cta text-lg py-1.5 md:py-2 px-3 md:px-4' : styles.link)}>
                {category.name}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}