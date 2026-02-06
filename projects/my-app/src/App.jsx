
import './App.css'
import Accordian from './components/accordian'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import ImageSlider from './components/image-slider'
import LoadMoreData from './components/load-more-data'

function App() {

  return (
    <>
      <div>
        {/* Accordian Component */}
         {/* <Accordian />   */}
        {/* Random color Component */}
         {/* <RandomColor/>  */}
        {/* Star Rating  Component */}
          {/* <StarRating noOfStars={10}/>  */}
        {/* Image slider component */}
        <ImageSlider url = {'https://picsum.photos/v2/list'} page = {'1'} limit = {'10'}/> 
        {/* load more products components */}
        {/* <LoadMoreData/> */}
      </div>
    </>
  )
}

export default App
