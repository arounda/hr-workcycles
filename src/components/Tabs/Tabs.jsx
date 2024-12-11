'use client';

import React, { act, useState } from 'react';
import s from './tabs.module.scss';
import { tourTabs } from '@/constants/tourTabs';
import Image from 'next/image';
import clsx from 'clsx';

const Tabs = () => {
  const [ activeTab, setActiveTab ] = useState(0);

  return (
    <div className={s.tabs}>
      <div className={s.tabsTop}>
        <h2 className='heading-h2'>
          Tour Our Platform
        </h2>

        <p className={`text ${s.tabsSubHeading}`}>
          See how our user-friendly interface and powerful features simplify HR management and enhance your workflow.
        </p>

        <div className={s.tabsBtns}>
          {tourTabs.map((item, i) => (
            <div
              className={clsx(
                `${s.tabsBtn}`,
                activeTab === i ? `${s.active}` : ''
              )}
              key={item.id}
              onClick={() => {
                setActiveTab(i);
              }}
            >
              <div className={s.tabsBtnIconWrapper}>
                <Image
                  src={item.icon}
                  alt=""
                  priority
                />

                {activeTab === i && (
                  <Image
                    className={s.tabsBtnIconWhite}
                    src={item.iconW} alt=""
                    priority
                  />
                )}
              </div>

              <div className={s.tabsBtnInfo}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={s.tabsContent}>
        {tourTabs.map((item, i) => (
          <Image
            priority
            className={s.tabsImage}
            key={item.id}
            src={item.image}
            alt=''
          />
        )).filter((_, i) => i === activeTab)}
      </div>
    </div>

  )
}

export default Tabs