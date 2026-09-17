import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZyUyMHByb2ZldGlvbmFsfGVufDB8fDB8fHww',
      intro: '',
      color:'blue',
      tag: 'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2ZldGlvbmFsfGVufDB8MXwwfHx8MA%3D%3D',
      color:'green',
      intro: '',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1517971129774-8a2b38fa128e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2ZldGlvbmFsfGVufDB8MXwwfHx8MA%3D%3D',
      color:'pink',
      intro: '',
      tag: 'Underbanked'
    },
    {
      img: 'https://images.unsplash.com/photo-1649920679317-63b3ba99c9dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtpbmclMjBwcm9mZXRpb25hbHxlbnwwfDF8MHx8fDA%3D',
      color:'purple',
      intro: '',
      tag: 'Underwear'
    },
    {
      img:'https://images.unsplash.com/photo-1627826436180-178c3b10767c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmtpbmclMjBwcm9mZXRpb25hbHxlbnwwfDF8MHx8fDA%3D',
      intro:'',
      color:'grey',
      tag:'Average'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App