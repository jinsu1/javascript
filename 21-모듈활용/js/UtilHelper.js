/**
 * UtilHelper.js
 * 
 * 재사용 가능한 기능들을 모아 놓은 클래스
 */

class UtilHelper {
    /**
     * URL의 querystring을 JSON객체로 변환하여 리턴한다.
     * @returns json object
     */

    getQuery() {
        const query = new URLSearchParams(location.search);
        return Object.fromEntries(query);
    }

    /**
     * 쿠키에 저장된 값을 반환한다. 값이 없을 경우 undefined를 반환한다.
     * @param {string} name  - 쿠키의 이름
     * @returns 쿠키값
     */
    getCookie(name) {
        const regex = new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)|[|]\\\/\+^])/g, "\\$1") + "=([^;]*)");
        let matches = document.cookie.match(regex);
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
   
    /**
     * 쿠키를 저장한다.
     * @param {string} name - 쿠키 이름
     * @param {*} value - 저장할 값
     * @param {number} maxAge - 유효시간(초단위)
     */
    setCookie(name, value, maxAge) {
        const encName = encodeURIComponent(name);
        const encValue = encodeURIComponent(value);
        let updatedCookie = `${encName}=${encValue};`;

        //유효경로 설정
        updatedCookie += "path=/;";
        //updatedCookie = "domain=.naver.com" 쿠키 전역 설정

        //유효시간은 파라미터가 전달된 경우만 설정
        //파라미터가 전달 안된 경우 설정되지 않기 때문에 브라우저를 닫기 전까지 유지
        if(maxAge !== undefined) {
            updatedCookie += `max-age=${maxAge}`;
        }

        //저장
        document.cookie = updatedCookie;
    }
}

const utilHelper = new UtilHelper();