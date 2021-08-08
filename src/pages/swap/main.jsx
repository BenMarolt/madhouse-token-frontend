import styles from './styles.module.scss';
import { Navbar, Footer, Text } from '../../components/index.js';


const SwapPage = () => {
  const social_scroll = <a className={styles.scroll_link} target='_blank' href='https://t.me/MadHouseToken'>telegram</a>

  return (
    <div className={styles.main_container}>
      <Navbar/>
        <div className={styles.inner_container}>
          <Text size={2.5}>We are currently in the presale whitelisting phase.  Please join our {social_scroll} for more information!</Text>
          { /* 
          <div className={styles.frame_container}>
              <Text size={2} margin='0 0 2em 0' weight={1000}>Contract Address:</Text>
              <Text size={2} margin='-1em 0 2em 0' weight={1000}>-----------------------------------</Text>
              <iframe src="https://poocoin.app/embed-swap" width="420" height="630"/> 
          </div>
          */ }
        </div>
      <Footer/>
    </div>
  )
}

export default SwapPage;
