import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ title, year, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            {/*장르는 배열이므로 map() 함수 사용해서 ul과 li 엘리먼트로 감싸 출력*/}
            <ul className="movie__genres">
                {genres.map((genre, index) => {
                    return (
                        <li key={index} className="movie__genre">{genre}</li>
                    );
                })}
            </ul>
            <p className="movie__summary">{summary.slice(0, 180)}...</p>
            </div>
        </div>
    );
}

// id를 Movie.propTypes에 추가
// id는 자료형이 Number, 반드시 있어야 하니 isRequired
Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    poster: PropTypes.string.isRequired,    // 이미지 주소
};

export default Movie;