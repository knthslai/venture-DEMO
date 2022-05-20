import { ResponsiveWindow } from '../../components';
import React, { ReactChild, ReactChildren } from 'react';
import { StyleProps } from '@chakra-ui/styled-system';

function LayoutSetup({
  children,
  MobileView,
  TabletView,
  DesktopView,
  styles,
  key
}: {
  children?: any;
  MobileView?: any;
  TabletView?: any;
  DesktopView?: any;
  styles?: { mobile: StyleProps; tablet: StyleProps; desktop: StyleProps };
  key?: string;
}) {
  return (
    <>
      {!!MobileView && (
        <ResponsiveWindow key={key} isMobile={true}>
          <MobileView style={styles?.mobile} children={children} />
        </ResponsiveWindow>
      )}
      {!!TabletView && (
        <ResponsiveWindow key={key} isTablet={true}>
          <TabletView style={styles?.tablet}>{children}</TabletView>
        </ResponsiveWindow>
      )}
      {!!DesktopView && (
        <ResponsiveWindow key={key} isDesktop={true}>
          <DesktopView style={styles?.desktop}>{children}</DesktopView>
        </ResponsiveWindow>
      )}
    </>
  );
}
export default LayoutSetup;
