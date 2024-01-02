import { useEffect, useState } from 'react';
import styles from './demo2.less';

export default () => {
  const [hh, setHh] = useState({});

  useEffect(() => {
    if (hh) {
      setHh('11');
    }
  }, []);

  return <div className={styles['demo']}>啦啦啦</div>;
};
