import Meta from '../meta'
import Header from '../Header'
import Footer from '@/components/Footer'

const Layout = ({ children }) => {
  return (
    <div className="grid grid-rows-layout bg-surface">
      <Meta />
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout;