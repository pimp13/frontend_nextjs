import { UserLoginRequest, UserRegisterRequest } from "@/types/users";
import { BACKEND_URL } from "@/lib/config";

export async function getCsrfToken(): Promise<string | null> {
  const getCookie = (name: string): string | null => {
    if (typeof document === 'undefined') return null; // برای محیط‌های غیرمرورگر (مثل SSR)
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  };

  // 2. بررسی وجود توکن در کوکی (با نامی که سرور استفاده می‌کند، مثلاً 'csrf_token')
  const csrfTokenFromCookie = getCookie('csrf_token');

  // 3. اگر توکن در کوکی وجود داشت، همان را برگردان
  if (csrfTokenFromCookie) {
    return csrfTokenFromCookie;
  }

  // 4. اگر توکن وجود نداشت، از سرور دریافت کن
  try {
    const res = await fetch('http://localhost:8080/api/csrf-token', {
      credentials: 'include', // برای ارسال کوکی‌ها
    });

    if (res.ok) {
      const csrfTokenFromHeader = res.headers.get('X-CSRF-TOKEN');
      if (!csrfTokenFromHeader) {
        throw new Error('CSRF token not found in response headers');
      }
      return csrfTokenFromHeader;
    } else {
      throw new Error('Failed to fetch CSRF token');
    }

  } catch (error) {
    console.error('Error getting CSRF token:', error);
    return null;
  }
}

export const create = async (data: UserRegisterRequest) => {
  const token = await getCsrfToken()
  if (!token) {
    console.log("No sending to get csrf token");
    return;
  }

  return await fetch(`${BACKEND_URL}/api/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-CSRF-TOKEN': token,
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });
}

export const loginUser = async (data: UserLoginRequest) => {
  const token = await getCsrfToken()
  if (!token) {
    console.log("No sending to get csrf token");
    return;
  }

  return await fetch(`${BACKEND_URL}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-CSRF-TOKEN': token,
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });
}

