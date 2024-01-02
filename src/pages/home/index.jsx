import { useEffect, useState } from 'react';
import styles from './index.less';

export default () => {
  const [hh, setHh] = useState({});

  useEffect(() => {
    if (hh) {
      setHh('11');
    }
  }, []);

  return <div className={styles['demo']}>啦1啦啦</div>;
};
