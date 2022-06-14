import Head from 'next/head'
import { MouseEventHandler, useEffect, useState } from 'react';
import SearchTextProvider from '../context/SearchText'

interface Video {
  id?: any
  title?: any
  duration?: any
  views?: any
  duration_raw?: any
  snippet?: any
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('musica infantil')
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
          setVideos(data)
        })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    setLoading(true)
    fetchVideos()
    setLoading(false)

  }, [searchQuery])

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

  return (
    <SearchTextProvider>
      <div className="bg-slate-200">
        <Head>
          <title>uApp - Videos without Ads</title>
          <meta name="description" content="uApp for you" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className='container mx-auto flex flex-col items-center w-full'>

          <h1 className="text-2xl font-bold m-10 text-slate-800">
            uApp - Videos without Ads
          </h1>

          <div className="flex flex-col items-center space-y-2 w-1/4 mb-5">
            <div className="flex space-x-2 nowrap">
              <input
                className="focus:ring-slate-800 focus:border-slate-800 block pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                type="text"
                id="textSearch"
                name="textSearch"
                onKeyUp={handleChange}
                defaultValue={searchQuery}
                placeholder="Videos para ver hoje..."
              />
              <button className="py-2 px-4 bg-slate-700 text-white rounded hover:bg-slate-500" onClick={handleClick}>></button>
            </div>
          </div>

          <div className='flex flex-wrap align-middle bg-slate-200'>

            {/* {error ? <div className="w-screen">{JSON.stringify(error)}</div> : <div className="w-screen">{JSON.stringify(dados)}</div>} */}

            {videos ? videos.map(({ id, title, duration, views, duration_raw, snippet }) => {
              return (
                <div key={title} className="lg:w-1/4 lg:p-4 my-2 p-4">
                  <iframe className="w-full hover:opacity-75 rounded-t mb-2" src={`https://www.youtube.com/embed/${id.videoId}`} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="text-clip overflow-hidden">{title}</span>
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{duration}</p>
                  {views > 0 ?
                    <p className="text-sm font-medium text-gray-900">Duration: {duration_raw} | Views: {formatNumber(views)}</p>
                    :
                    <p className="text-red-600 font-bold">Ao vivo</p>
                  }
                </div>
              )
            })
              : <div>Loading...</div>
            }
          </div>

        </main>

        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '} Sam
          </a>
        </footer>
      </div>
    </SearchTextProvider>
  )
}

