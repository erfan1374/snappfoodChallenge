import React, {useEffect, useState} from "react";
import api from './../../api'
import VendorHeader from "../components/VendorHeader";
import VendorItem from "../components/VendorItem";
const Vendors = () => {
  const [vendorList, setVendorList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  const [total, setTotal] = useState(0)

  window.onscroll = () => {
    console.log(Math.round(window.innerHeight + document.documentElement.scrollTop), document.documentElement.offsetHeight)
    if (Math.round(window.innerHeight + document.documentElement.scrollTop) >= document.documentElement.offsetHeight) {
      if(!noData) {
        console.log('go next')
        getVendorList(page);
      }
    }
  }
  useEffect(() => {
    getVendorList(page)
  }, [])


  const getVendorList = (page) => {
    setLoading(true);
      api.vendorList.getAll({
        page_size: 10,
        page,
        lat: 35.754,
        long: 51.328
      }).then(res => {
        const newPage = page + 1;
        setPage(newPage);
        setTotal(res.data.open_count)
        const newList = [...vendorList, ...res.data.finalResult.filter(i => i.type === 'VENDOR')]
        setVendorList(newList);
        if (!res.data.finalResult.length) {
          setNoData(true);
        }
      }).catch((err) => {
      }).finally(() =>{
          setLoading(false);
      })
  }
  return (
    <>
      <VendorHeader count={total}/>
      <article className='vendors__wrapper'>
        {vendorList.map((item, index) => (
          <VendorItem value={item.data} key={index}/>
        ))}
        {loading ? 'loading' : null}
      </article>
    </>
  )
}
export default Vendors;
