import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {

    // isLoading state
    state = {
        isLoading: true,
        // 로딩된 영화 데이터 저장하도록 movie state 추가
        // state는 미리 계획해서 작성하는 것이 좋음!
        movies: [],
    }

    // async: getMovies() 함수는 시간이 필요하다고 자바스크립트에 전달하는 역할 ('비동기' 라고 말해주는 역할)
    getMovie = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
        //                  state : 구조 분해 할당으로 얻은 영화 테이터가 있는 변수
        this.setState({movies: movies, isLoading: false });
        // =this.setState({ movies });  <- 키와 대입할 변수 이름이 같으면 축약 가능

    };


    // 실행되면 this.getMovies()가 실행
    componentDidMount() {
        this.getMovie();
    }

    // 출력
    render() {

        const { isLoading, movies } = this.state;

        // movies는 배열 / 배열의 원소 1개가 movie로 넘어옴
        return  <section className="container">
            {   isLoading ?
                // 로딩 부분 화면
                (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                )
                :
                // 로딩 끝나고 화면
                (
                    <div className="movies">
                        {
                            movies.map((movie) => {

                                // Movie 컴포넌트 출력
                                return <Movie
                                    key={movie.id}
                                    year={movie.year}
                                    title={movie.title}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                    genres={movie.genres}
                                />;
                            })
                        }
                    </div>
                )
            }
        </section>
    }
}

export default Home;
