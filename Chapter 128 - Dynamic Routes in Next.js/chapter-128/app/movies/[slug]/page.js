import { notFound } from 'next/navigation'
import { movies } from '../../data/movies'
import Image from 'next/image'

export default async function MoviePage({ params }) {
  const { slug } = await params
  const movie = movies.find((m) => m.slug === slug)

  if (!movie) {
    notFound()
  }

  return (<>
    <div className='max-w-[60vw] m-auto border border-white p-5 rounded-sm'>
      <div className="flex gap-5 items-center justify-center">
        <div className='movie_poster'>
          <Image src={movie.poster} alt={movie.title} width={500} height={150} />
        </div>
        <div className='movie_details'>
          <h1 className='text-7xl'>{movie.title}</h1>
          <p className='text-2xl'>{movie.year}</p>
          <p className='mt-5'>{movie.description}</p>
        </div>
      </div>
    </div>
  </>);
};