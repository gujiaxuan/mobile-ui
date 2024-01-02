import { TabBar } from 'antd-mobile';
import { AppOutline, AppstoreOutline, UserOutline } from 'antd-mobile-icons';
import { useState } from 'react';
import { Outlet, history } from 'umi';
import styles from './index.less';

const TabBars = () => {
  const [activeKey, setActiveKey] = useState('/home');

  const tabs = [
    {
      title: '首页',
      icon: <AppOutline />,
      key: '/home',
    },
    {
      title: '工作台',
      icon: <AppstoreOutline />,
      key: '/workbench',
    },
    {
      title: '个人中心',
      icon: <UserOutline />,
      key: '/mine',
    },
  ];

  const handleClick = (key) => {
    setActiveKey(key);
    history.push(key);
  };
  return (
    <>
      <Outlet />
      <TabBar
        className={styles['tabbars']}
        activeKey={activeKey}
        onChange={handleClick}
      >
        {tabs.map((item) => {
          return (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          );
        })}
      </TabBar>
    </>
  );
};
export default TabBars;
