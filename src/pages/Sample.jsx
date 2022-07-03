import { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import styles from './sample.module.scss';

export default function Sample() {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const [ref, inView] = useInView({threshold: 0.7})

  // 서버에서 아이템을 가지고 오는 함수
  const getItems = useCallback(async () => {
    setLoading(true)
    await setTimeout(() => {
      setItems(prev => [...prev, page])
    }, 1000);
    setLoading(false)
  }, [page])

  // `getItems` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
    getItems()
  }, [getItems])

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setPage(prevState => prevState + 1)
    }
  }, [inView, loading])

  return (
    <>
      <div className="list" ref={ref}>
        {items.map((item, idx) => (
          <div key={idx} className={styles.box}>{item}</div>
        ))}
      </div>
      <div 
        className="loading"
        style={loading ? {display: 'block'} : {display: 'none'}}>
        <p>Loading...</p>
      </div>
      <div className="footer">Footer</div>
    </>
  )
}