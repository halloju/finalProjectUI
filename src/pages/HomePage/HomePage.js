import styled from 'styled-components'
import Banner from './components/Banner.js'
import Characteristic from './components/Characteristic.js'
import HotSales from './components/HotSales.js'

const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`
function HomePage() {
  return (
    <div>
      <Banner/>
      <Wrapper>
        <Characteristic/>
        <HotSales/>
      </Wrapper>
    </div>
  );
}

export default HomePage;