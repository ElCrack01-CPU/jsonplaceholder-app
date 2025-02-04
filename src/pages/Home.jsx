import UserList from '../components/UserList';
import PostList from '../components/PostList';
import CommentList from '../components/CommentList';

const Home = () => (
  <div className="container">
    <h1 className="text-center my-4">JSONPlaceholder Data</h1>
    <UserList />
    <PostList />
    <CommentList />
  </div>
);

export default Home;