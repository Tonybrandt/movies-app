const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjQxODg1N2ZiNzM0YzkwZDBkYzExNGE0ZTFkMDQ3NyIsInN1YiI6IjY0YTk0OTcxZDFhODkzMDBhZGJlYTNjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jJuIXeC32QnEep9-ZmGi-WRAMcttZCZQJKzgrHMLi0A",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((res) => res.json());
}
