import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';
import Tippy from '@tippyjs/react';


export default function Home() {
  const { data: _repositories } = swr("/api/repos");
  const repositories = _repositories ? _repositories : null;

  return (
    <>
      <div className="bg-neutral-800/10 shadow-xl rounded-lg w-full h-auto mt-6">
          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
              <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
                <div className="flex items-center">
                <p className="flex items-center text-white text-4xl font-semibold">
                    雪村さや(Yukimura Saya)
                </p>
            
                </div>
                <p className="text-white/50 text-md mt-3">
                <p>嗨，我是<strong>linlin</strong>一個位於台灣的學生開發者，專注於discord社群管理機器人和用戶違規資料庫的維護</p>
        <br></br>
        <h1><strong>經驗</strong></h1>
        <ul>
            <li><strong>* 團隊管理:</strong> 擁有1.5年領導學生工程師團隊執行專案開發</li>
            <li><strong>* 軟體開發:</strong> 主持了discordrootbot系列和gitaenobot開源版</li>
        </ul>
        <br></br>
        <h1><strong>社交媒體和社群連結</strong></h1>
        <ul>
            <li>我因為個人喜好導致我沒有經營任何的社交媒體</li>
        </ul>
<br></br>
        <h1><strong>專案</strong></h1>
                              <p><strong>gitaenobot:</strong> 我的第一個中小型"大部分"開源專案 (<a href="https://github.com/Tdr-gaming-studio/gitaenobot/tree/vhttps://github.com/Tdr-gaming-studio/gitaenobot/tree/v2" rel="follow" target="_blank">gitaenobotv2</a>)</p>
<br></br>
        <h1><strong>目標</strong></h1>
            <p>我希望可以透過開源專案提供程式初學者一個簡單入門的方式同時增進我的開發能力</p>
            <p>我同時希望可以透過discord社群管理機器人和違規用戶資料庫提供一個更好的社群環境</p>
        <br></br>
        <p>如果你對開源discord專案和違規用戶資料庫感興趣，你可以透過電子郵件聯絡我</p>
                
                </p>
              </div>
              <div className={`order-first lg:order-last flex-shrink-0 relative w-[160px] h-[160px] rounded-full pulse-avatar-online `}>
              <img alt="Linlin" src={`https://avatars.githubusercontent.com/u/158514867?v=4`} width="160" height="160" className={`bg-neutral-700 w-[160px] h-[160px] rounded-full`} />
              </div>
              
            </div>
            <br></br><br></br>
                  <span style={{ zIndex: '-1' }} className="text-white/5 absolute bottom-3 left-7 text-xl sm:text-2xl md:text-4xl lg:text-3xl font-semibold">學生開發者</span>
          </div>
      </div>
    </>
  )
}
