import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Avatar from '../Avatar';

export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  path?: string;
}

export interface SidebarProps {
  userName?: string;
  userTeam?: string;
  menuItems?: MenuItem[];
  activeMenuId?: string;
  onMenuClick?: (menuId: string) => void;
}

const defaultMenuItems: MenuItem[] = [
  { id: 'home', label: '홈', icon: '/images/icon-smart-home.svg', path: '/dashboard' },
  { id: 'drive', label: '드라이브', icon: '/images/icon-folder.svg' },
  { id: 'works', label: 'Works', icon: '/images/icon-layout-grid.svg' },
  { id: 'survey', label: '설문', icon: '/images/icon-chart-bar.svg' },
  { id: 'mail', label: '메일', icon: '/images/icon-mail.svg' },
];

export default function Sidebar({
  userName = '김다우 사원',
  userTeam = '애플리케이션디자인팀',
  menuItems = defaultMenuItems,
  activeMenuId,
  onMenuClick,
}: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  // 현재 경로에 따라 activeMenuId 자동 설정
  const currentActiveMenuId = activeMenuId || 
    menuItems.find(item => item.path === location.pathname)?.id || 
    'home';

  const handleMenuClick = (menuId: string) => {
    const menuItem = menuItems.find(item => item.id === menuId);
    
    if (menuItem?.path) {
      navigate(menuItem.path);
    }
    
    if (onMenuClick) {
      onMenuClick(menuId);
    }
  };

  return (
    <div
      className="bg-[#08a7bf] content-stretch flex flex-col items-start overflow-clip px-0 py-[20px] relative self-stretch shrink-0 w-[320px]"
      data-name="gnb"
      data-node-id="7531:402"
    >
      {/* Logo */}
      <div
        className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative shrink-0 w-full"
        data-name="wrap_logo"
        data-node-id="7531:453"
      >
        <div
          className="h-[26px] overflow-clip relative shrink-0 w-[120px]"
          data-name="Logo/Signature/horizon"
          data-node-id="7531:436"
        >
          <div
            className="absolute inset-[20.78%_0_11.84%_30.08%]"
            data-name="Group"
            data-node-id="I7531:436;422:74"
          >
            <img
              alt=""
              className="block max-w-none size-full"
              src="/images/logo-part1.png"
            />
          </div>
          <div
            className="absolute inset-[0_78.16%_0_0]"
            data-name="Group"
            data-node-id="I7531:436;422:84"
          >
            <img
              alt=""
              className="block max-w-none size-full"
              src="/images/logo-part2.png"
            />
          </div>
        </div>
      </div>

      {/* Profile */}
      <div
        className="content-stretch flex gap-[10px] items-start overflow-clip px-[24px] py-[20px] relative shrink-0 w-full"
        data-name="wrap_profile"
        data-node-id="7531:454"
      >
        <Avatar
          className="relative shrink-0 size-[40px]"
          masterBadge={false}
          statusBadge={false}
        />
        <div
          className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative"
          data-name="wrap_name"
          data-node-id="7531:1915"
        >
          <div
            className="content-stretch flex items-center relative shrink-0 w-full"
            data-name="name"
            data-node-id="7531:1945"
          >
            <p
              className="font-['Pretendard:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[color:var(--text\/neutral\/white,white)] text-[length:var(--font-size\/body\/medium,14px)]"
              data-node-id="7531:1946"
            >
              {userName}
            </p>
          </div>
          <div
            className="content-stretch flex items-center relative shrink-0 w-full"
            data-name="team"
            data-node-id="7531:1944"
          >
            <p
              className="font-['Pretendard:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[color:var(--text\/neutral\/white,white)] text-[length:var(--font-size\/body\/small,13px)]"
              data-node-id="7531:1916"
            >
              {userTeam}
            </p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div
        className="border-[#1298ac] border-solid border-t content-stretch flex flex-col items-start overflow-clip px-0 py-[20px] relative shrink-0 w-full"
        data-name="wrap_menu"
        data-node-id="7531:2005"
      >
        {menuItems.map((menuItem) => (
          <div
            key={menuItem.id}
            className={`content-stretch flex gap-[10px] items-center overflow-clip px-[24px] py-[8px] relative shrink-0 w-full cursor-pointer transition-colors ${
              currentActiveMenuId === menuItem.id ? 'bg-[#1298ac]' : 'hover:bg-[#1298ac]/50'
            }`}
            data-name="menu"
            data-node-id={`menu-${menuItem.id}`}
            onClick={() => handleMenuClick(menuItem.id)}
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-name={`icon-${menuItem.id}`}
            >
              <img
                alt={menuItem.label}
                className="block max-w-none size-full"
                src={menuItem.icon}
              />
            </div>
            <p
              className="font-['Pretendard:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[color:var(--text\/neutral\/white,white)] text-[length:var(--font-size\/body\/medium,14px)]"
              data-node-id={`menu-text-${menuItem.id}`}
            >
              {menuItem.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
