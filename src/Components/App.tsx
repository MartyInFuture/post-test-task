import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyled from '../styles/GlobalStyled';
import Container from './common/container/Container';

const App = () => {
  const PostsPage = lazy(() => import('../pages/posts/PostsPage'));
  const SinglePostPage = lazy(
    () => import('../pages/singlePost/SinglePostPage')
  );
  return (
    <>
      <GlobalStyled />
      <Container>
        <Switch>
          <Suspense fallback="">
            <Route path="/" exact>
              <PostsPage />
            </Route>
            <Route path="/post/:id" exact>
              <SinglePostPage />
            </Route>
          </Suspense>
        </Switch>
      </Container>
    </>
  );
};

export default App;
