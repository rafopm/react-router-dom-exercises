import { Fragment } from "react";
import {
  Link,
  NavLink,
  Route,
  useResolvedPath,
  Routes,
  Navigate,
} from "react-router-dom";
import ActionPage from "../pages/categories/ActionPage";
import CategoriesPage from "../pages/CategoriesPage";
import PrivateRoute from "./PrivateRoute";

export default function CategoriesRouter() {
  const url = useResolvedPath("").pathname
  console.log(url)
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={`${url}`} >
              All
            </Link>
          </li>
          {/* <li>
            <NavLink to={`${url}/terror`} >
              Terror
            </NavLink>
          </li> */}
          <li>
            <Link to={`${url}/action`} >
              Action
            </Link>
          </li>
          <li>
            <NavLink to={`${url}/anime`} >
              Anime
            </NavLink>
          </li>
        </ul>
      </nav>
      <>
        <Routes>
          <Route path="/" element={<CategoriesPage />} />
          {/* <Route
          path="/categories/terror/*"
          element={<PrivateRoute component={TerrorRouter} />}
        /> */}

          <Route exact path="/categories/action" element={<CategoriesPage />} />
          {/* <h1>Category Action</h1> */}
          <Route exact path="/categories/anime">
            {/* <h1>Category Anime</h1> */}
          </Route>

          <Route
            path="/categories/*"
            element={<Navigate to="/404" replace />}
          />
        </Routes>
      </>
    </div>
  );
}

function TerrorRouter() {
  const urlTerror = useResolvedPath("").pathname;
  console.log(urlTerror);
  return (
    <div>
      <ul>
        <li>
          <Link to="/categories/terror">All</Link>
        </li>
        <li>
          <Link to="/categories/terror/gore">Gore</Link>
        </li>
        <li>
          <Link to="/categories/terror/suspense">Suspense</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path={`${urlTerror}`}>
          <h3>Category Terror</h3>
        </Route>
        <Route exact path={`${urlTerror}/gore`}>
          <h3>Gore</h3>
        </Route>
        <Route exact path={`${urlTerror}/suspense`}>
          <h3>Suspense</h3>
        </Route>
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </div>
  );
}
