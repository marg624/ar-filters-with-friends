import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-8 mb-8 md:mb-12">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
        <a href="https://ar-filters-with-friends.vercel.app/">Filters w/ friends</a>
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A bunch of AR filters.
      </h4>
    </section>
  )
}

export default Intro
