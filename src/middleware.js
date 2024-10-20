/* eslint-disable max-len */
import { i18nRouter } from 'next-i18n-router';
import { NextResponse } from 'next/server';
import i18nConfig from './i18nConfig';
import { CURRENT_LAYOUT, TOKEN } from './constants';

export function middleware(request) {
  const cookie = request.cookies.get(TOKEN);
  const token = cookie?.value;
  const { pathname } = request.nextUrl;

  const { nextUrl: { search } } = request;
  const urlSearchParams = new URLSearchParams(search);
  const params = Object.fromEntries(urlSearchParams.entries());

  const layout = request.cookies.get(CURRENT_LAYOUT);
  const currentLayout = layout?.value || '/layout1';

  if (token) {
    if (pathname === `${currentLayout}/login`) {
      return NextResponse.redirect(new URL(`${currentLayout}/`, request.url));
    }

    if (pathname === `${currentLayout}/signup`) {
      return NextResponse.redirect(new URL(`${currentLayout}/`, request.url));
    }

    if (pathname === `${currentLayout}/account/my-account`) {
      return NextResponse.redirect(new URL(`${currentLayout}/account/my-account/profile-details`, request.url));
    }

    if (pathname === `${currentLayout}/account` || pathname === `${currentLayout}/account/my-account`) {
      return NextResponse.redirect(new URL(`${currentLayout}/account/my-account/profile-details`, request.url));
    }

    if (pathname === `${currentLayout}/account/wallet`) {
      return NextResponse.redirect(new URL(`${currentLayout}/account/wallet/transactions`, request.url));
    }
  } else if (new URL(request.url).pathname.startsWith(`${currentLayout}/account`)) {
    return NextResponse.redirect(new URL(`${currentLayout}/login`, request.url));
  } else if (params?.category === 'Favorites') {
    return NextResponse.redirect(new URL(`${currentLayout}/login`, request.url));
  }

  return i18nRouter(request, i18nConfig);
}
// applies this middleware only to files in the app directory
export const config = {
  matcher: ['/layout1/:path*', '/((?!api|static|.*\\..*|_next).*)', '/layout2/:path*'],
};
