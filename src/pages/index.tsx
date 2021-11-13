import HeroBlock from '../components/Home/HeroBlock'

const Home = () => {
  return (
    <>
      <HeroBlock />
      <SecondBlock />
    </>
  )
}

const SecondBlock = () => {
  return (
    <div>
      <h1>Second Block</h1>
    </div>
  )
}

export default Home
