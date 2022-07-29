import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import SearchTextProvider from '../context/SearchText'
import { youtube } from 'scrape-youtube';

interface Video {
  id?: any
  title?: any
  thumbnail?: any
  duration?: any
  views?: any
  duration_raw?: any
  snippet?: any
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('adele')
  const [isLoading, setLoading] = useState(false)
  const [videos, setVideos] = useState<Video[]>([])
  const [error, setError] = useState('')
  const [dados, setDados] = useState(null)
  const [online, setOnline] = useState('')

  useEffect(() => {
    window.navigator.onLine ? setOnline('Online') : setOnline('Offline')
  }, [])

  const fetchVideos = async () => {
    try {
      await fetch('api/videos', {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          searchQuery
        })
      }).then((res) => res.json())
        .then((data) => {
          const { videos } = data;
          setVideos(videos)
        })
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(() => {

  //   setLoading(true)
  //   fetchVideos()
  //   setLoading(false)

  // }, [searchQuery])

  async function handleClick(e: any) {
    try {
      setLoading(true)
      fetchVideos()
      setLoading(false)
    } catch (error) {
      setError(JSON.stringify(error, null, 2))
    }

  }
  function handleChange(e: any) {
    setTimeout(() => {
      setSearchQuery(e.target.value)
    }, 3000);
  }

  function formatNumber(num: Number) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  function formatTime(num: any) {
    const newLocal = num * 1000;
    return new Date(newLocal).toISOString().substr(11, 8)
  }

  return (
    <SearchTextProvider>
      <div className="bg-white h-fit">
        <Head>
          <title>uApp - Videos without Ads</title>
          <meta name="description" content="uApp for you" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className='flex flex-col items-center w-full'>

          <h1 className="text-2xl p-10 font-bold text-neutral-800 text-center">
            uApp - Videos without Ads!!!
          </h1>

          <div className="flex flex-col items-center space-y-2 w-1/4 mb-5">
            <div className="flex space-x-2 nowrap">
              <input
                className="focus:ring-neutral-800 focus:border-neutral-800 block pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                type="text"
                id="textSearch"
                name="textSearch"
                onKeyUp={handleChange}
                defaultValue={searchQuery}
                placeholder="Videos to see today..."
              />
              <button className="py-2 px-4 bg-neutral-700 text-white rounded hover:bg-neutral-500" onClick={handleClick}>{'>'}</button>
            </div>
          </div>

          <div className='flex flex-wrap align-middle px-10'>

            {videos.length > 0 ? videos.map(({ id, title, duration, views, duration_raw, thumbnail }) => {
              return (
                <div key={title} className={`lg:w-1/4 lg:p-4 md:w-1/2 md:p-2 sm:w-full my-2 ${true ? 'opacity-100' : 'opacity-0'} transition-opacity ease-in-out duration-1000`}>
                  <iframe className="w-full hover:opacity-75 rounded-t mb-2" src={`https://www.youtube.com/embed/${id}?wmode=transparent?enablejsapi=1`} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="text-clip overflow-hidden">{title}</span>
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{duration}</p>
                  {views > 0 ?
                    <p className="text-sm font-medium text-gray-900">Duration: {formatTime(duration)} | Views: {formatNumber(views)}</p>
                    :
                    <p className="text-red-600 font-bold">Ao vivo</p>
                  }
                </div>
              )
            })
              : <h1>Nothing to see...</h1>
            }
          </div>

        </main>

        <footer className="flex flex-col justify-center items-center py-10">
          <div>
            Powered by {' '}
            <a
              href="https://github.com/smkah"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sam
            </a>
          </div>
        </footer>

      </div>
    </SearchTextProvider>
  )
}

