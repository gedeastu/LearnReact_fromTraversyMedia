import React from 'react'
import { useState } from 'react';
import cardioImage from '../assets/cardioimage.jpg'
const data = [
      {
        id: 1,
        services: 'Cardio Rehabilitation Center',
        desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text',
        image : {cardioImage},
        icon : '<svg viewBox="0 0 40 36" xmlns="http://www.w3.org/2000/svg"><path d="M35.125 19.375C34.2723 19.3762 33.4409 19.6412 32.7447 20.1335C32.0485 20.6258 31.5216 21.3215 31.2363 22.125H27.8659L25.4295 14.8152C25.3366 14.5367 25.157 14.2952 24.917 14.1261C24.6769 13.9571 24.389 13.8693 24.0955 13.8756C23.802 13.882 23.5182 13.9821 23.2856 14.1614C23.0531 14.3406 22.8841 14.5896 22.8033 14.8719L18.9782 28.2575L14.4811 1.27315C14.4289 0.961595 14.2711 0.677497 14.0341 0.468626C13.7971 0.259756 13.4955 0.138854 13.1798 0.126248C12.8642 0.113643 12.5538 0.210104 12.301 0.39941C12.0481 0.588717 11.8681 0.859324 11.7912 1.16573L6.55164 22.125H2.125C1.76033 22.125 1.41059 22.2699 1.15273 22.5278C0.894866 22.7856 0.75 23.1354 0.75 23.5C0.75 23.8647 0.894866 24.2144 1.15273 24.4723C1.41059 24.7302 1.76033 24.875 2.125 24.875H7.625C7.93162 24.875 8.22942 24.7724 8.47109 24.5837C8.71275 24.395 8.88439 24.1309 8.95875 23.8335L12.8552 8.24698L17.2689 34.726C17.3198 35.0344 17.4741 35.3162 17.7066 35.525C17.939 35.7339 18.2357 35.8573 18.5477 35.875H18.6259C18.9244 35.8748 19.2148 35.7774 19.453 35.5975C19.6913 35.4177 19.8646 35.1652 19.9467 34.8782L24.2264 19.901L25.5705 23.9349C25.6617 24.2087 25.8368 24.4468 26.071 24.6155C26.3051 24.7843 26.5864 24.875 26.875 24.875H31.2363C31.4884 25.588 31.9317 26.218 32.5176 26.6961C33.1036 27.1742 33.8097 27.482 34.5588 27.5859C35.3079 27.6898 36.0711 27.5858 36.7651 27.2851C37.459 26.9845 38.057 26.4989 38.4936 25.8814C38.9302 25.2639 39.1886 24.5383 39.2406 23.7838C39.2927 23.0293 39.1363 22.2751 38.7886 21.6035C38.4409 20.9319 37.9152 20.3688 37.2691 19.9758C36.623 19.5828 35.8813 19.375 35.125 19.375Z" fill="#fff"/></svg>'
      },
      {
        id: 2,
        services: 'Cardio Rehabilitation Center',
        desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text',
        image : {cardioImage},
        icon : '<svg viewBox="0 0 40 36" xmlns="http://www.w3.org/2000/svg"><path d="M35.125 19.375C34.2723 19.3762 33.4409 19.6412 32.7447 20.1335C32.0485 20.6258 31.5216 21.3215 31.2363 22.125H27.8659L25.4295 14.8152C25.3366 14.5367 25.157 14.2952 24.917 14.1261C24.6769 13.9571 24.389 13.8693 24.0955 13.8756C23.802 13.882 23.5182 13.9821 23.2856 14.1614C23.0531 14.3406 22.8841 14.5896 22.8033 14.8719L18.9782 28.2575L14.4811 1.27315C14.4289 0.961595 14.2711 0.677497 14.0341 0.468626C13.7971 0.259756 13.4955 0.138854 13.1798 0.126248C12.8642 0.113643 12.5538 0.210104 12.301 0.39941C12.0481 0.588717 11.8681 0.859324 11.7912 1.16573L6.55164 22.125H2.125C1.76033 22.125 1.41059 22.2699 1.15273 22.5278C0.894866 22.7856 0.75 23.1354 0.75 23.5C0.75 23.8647 0.894866 24.2144 1.15273 24.4723C1.41059 24.7302 1.76033 24.875 2.125 24.875H7.625C7.93162 24.875 8.22942 24.7724 8.47109 24.5837C8.71275 24.395 8.88439 24.1309 8.95875 23.8335L12.8552 8.24698L17.2689 34.726C17.3198 35.0344 17.4741 35.3162 17.7066 35.525C17.939 35.7339 18.2357 35.8573 18.5477 35.875H18.6259C18.9244 35.8748 19.2148 35.7774 19.453 35.5975C19.6913 35.4177 19.8646 35.1652 19.9467 34.8782L24.2264 19.901L25.5705 23.9349C25.6617 24.2087 25.8368 24.4468 26.071 24.6155C26.3051 24.7843 26.5864 24.875 26.875 24.875H31.2363C31.4884 25.588 31.9317 26.218 32.5176 26.6961C33.1036 27.1742 33.8097 27.482 34.5588 27.5859C35.3079 27.6898 36.0711 27.5858 36.7651 27.2851C37.459 26.9845 38.057 26.4989 38.4936 25.8814C38.9302 25.2639 39.1886 24.5383 39.2406 23.7838C39.2927 23.0293 39.1363 22.2751 38.7886 21.6035C38.4409 20.9319 37.9152 20.3688 37.2691 19.9758C36.623 19.5828 35.8813 19.375 35.125 19.375Z" fill="#fff"/></svg>'
      },
      {
        id: 3,
        services: 'Cardio Rehabilitation Center',
        desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text',
        image : {cardioImage},
        icon : '<svg viewBox="0 0 40 36" xmlns="http://www.w3.org/2000/svg"><path d="M35.125 19.375C34.2723 19.3762 33.4409 19.6412 32.7447 20.1335C32.0485 20.6258 31.5216 21.3215 31.2363 22.125H27.8659L25.4295 14.8152C25.3366 14.5367 25.157 14.2952 24.917 14.1261C24.6769 13.9571 24.389 13.8693 24.0955 13.8756C23.802 13.882 23.5182 13.9821 23.2856 14.1614C23.0531 14.3406 22.8841 14.5896 22.8033 14.8719L18.9782 28.2575L14.4811 1.27315C14.4289 0.961595 14.2711 0.677497 14.0341 0.468626C13.7971 0.259756 13.4955 0.138854 13.1798 0.126248C12.8642 0.113643 12.5538 0.210104 12.301 0.39941C12.0481 0.588717 11.8681 0.859324 11.7912 1.16573L6.55164 22.125H2.125C1.76033 22.125 1.41059 22.2699 1.15273 22.5278C0.894866 22.7856 0.75 23.1354 0.75 23.5C0.75 23.8647 0.894866 24.2144 1.15273 24.4723C1.41059 24.7302 1.76033 24.875 2.125 24.875H7.625C7.93162 24.875 8.22942 24.7724 8.47109 24.5837C8.71275 24.395 8.88439 24.1309 8.95875 23.8335L12.8552 8.24698L17.2689 34.726C17.3198 35.0344 17.4741 35.3162 17.7066 35.525C17.939 35.7339 18.2357 35.8573 18.5477 35.875H18.6259C18.9244 35.8748 19.2148 35.7774 19.453 35.5975C19.6913 35.4177 19.8646 35.1652 19.9467 34.8782L24.2264 19.901L25.5705 23.9349C25.6617 24.2087 25.8368 24.4468 26.071 24.6155C26.3051 24.7843 26.5864 24.875 26.875 24.875H31.2363C31.4884 25.588 31.9317 26.218 32.5176 26.6961C33.1036 27.1742 33.8097 27.482 34.5588 27.5859C35.3079 27.6898 36.0711 27.5858 36.7651 27.2851C37.459 26.9845 38.057 26.4989 38.4936 25.8814C38.9302 25.2639 39.1886 24.5383 39.2406 23.7838C39.2927 23.0293 39.1363 22.2751 38.7886 21.6035C38.4409 20.9319 37.9152 20.3688 37.2691 19.9758C36.623 19.5828 35.8813 19.375 35.125 19.375Z" fill="#fff"/></svg>'
      },
      {
        id: 4,
        services: 'Cardio Rehabilitation Center',
        desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text',
        image : {cardioImage},
        icon : '<svg viewBox="0 0 40 36" xmlns="http://www.w3.org/2000/svg"><path d="M35.125 19.375C34.2723 19.3762 33.4409 19.6412 32.7447 20.1335C32.0485 20.6258 31.5216 21.3215 31.2363 22.125H27.8659L25.4295 14.8152C25.3366 14.5367 25.157 14.2952 24.917 14.1261C24.6769 13.9571 24.389 13.8693 24.0955 13.8756C23.802 13.882 23.5182 13.9821 23.2856 14.1614C23.0531 14.3406 22.8841 14.5896 22.8033 14.8719L18.9782 28.2575L14.4811 1.27315C14.4289 0.961595 14.2711 0.677497 14.0341 0.468626C13.7971 0.259756 13.4955 0.138854 13.1798 0.126248C12.8642 0.113643 12.5538 0.210104 12.301 0.39941C12.0481 0.588717 11.8681 0.859324 11.7912 1.16573L6.55164 22.125H2.125C1.76033 22.125 1.41059 22.2699 1.15273 22.5278C0.894866 22.7856 0.75 23.1354 0.75 23.5C0.75 23.8647 0.894866 24.2144 1.15273 24.4723C1.41059 24.7302 1.76033 24.875 2.125 24.875H7.625C7.93162 24.875 8.22942 24.7724 8.47109 24.5837C8.71275 24.395 8.88439 24.1309 8.95875 23.8335L12.8552 8.24698L17.2689 34.726C17.3198 35.0344 17.4741 35.3162 17.7066 35.525C17.939 35.7339 18.2357 35.8573 18.5477 35.875H18.6259C18.9244 35.8748 19.2148 35.7774 19.453 35.5975C19.6913 35.4177 19.8646 35.1652 19.9467 34.8782L24.2264 19.901L25.5705 23.9349C25.6617 24.2087 25.8368 24.4468 26.071 24.6155C26.3051 24.7843 26.5864 24.875 26.875 24.875H31.2363C31.4884 25.588 31.9317 26.218 32.5176 26.6961C33.1036 27.1742 33.8097 27.482 34.5588 27.5859C35.3079 27.6898 36.0711 27.5858 36.7651 27.2851C37.459 26.9845 38.057 26.4989 38.4936 25.8814C38.9302 25.2639 39.1886 24.5383 39.2406 23.7838C39.2927 23.0293 39.1363 22.2751 38.7886 21.6035C38.4409 20.9319 37.9152 20.3688 37.2691 19.9758C36.623 19.5828 35.8813 19.375 35.125 19.375Z" fill="#fff"/></svg>'
      },
]
export default data;