export const fetchExercises = async () => {
  const url = 'https://script.googleusercontent.com/a/macros/student.tdmu.edu.vn/echo?user_content_key=AehSKLjVzAXj_kXz2qOpo6iIU6wA00rEqI78y4xUb9urdHDSKkb4_ggcMfbXiT22fFOq6KIAhpnWK_5RN9Ydu1S2xs1BaR18qGZEa_iXwBQOhBo0qgUREe5Zp0QhD-S5bSYwqluvFUGNF0Dv0LiQ3pAcOWzEBjdk6_VEAkb-suYta6LkXFfwDn9D1m9eqgf3Qq91vIcXEcLT1G-OTq3uQr1qQjzJ3lpfBQQfd_PVnW4YgcIuEz7wNpb0SdCbYmsR-wtITaubogJ2m7OnIf02TykM3KWOhpFLYxBItSwpuzgBF3GdjomhTbaMUMCvbbnNsg&lib=MyukR3CZn61jo47XT8h9ikuTx0gL_yUXk';

  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Lỗi khi fetch dữ liệu excercise:", error);
    return [];
  }
};
