import Header from '@components/header'

const Dashboard = ({ name, bio }) => (
  <>
    <Header />
    <h1>{name}</h1>
    <p>{`Bio: ${bio}`}</p>
  </>
)

Dashboard.getInitialProps = async () => {
  const res = await window.fetch('https://api.github.com/users/joelmu')
  const user = await res.json()
  return user
}

export default Dashboard
