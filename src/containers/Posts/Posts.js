import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadTableData } from '../../redux/modules/Posts';
import DataTable from '../../components/DataTable/DataTable';
import styles from './Posts.scss';

@connect(
  state => ({
    data: state.posts.list,
    headers: state.posts.headers
  }), {loadTableData})
export default class Posts extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    loadTableData: PropTypes.func.isRequired,
    headers: PropTypes.array.isRequired
  }
  constructor(props) {
    super(props);
  }

  loadTableData(tableName) {
    this.props.loadTableData(tableName);
  }

  render() {
    const { data, headers } = this.props;
    return (
      <div>
        <button className={`${styles.api_btn} btn`} onClick={() => this.loadTableData('posts')}>Posts</button>
        <button className={`${styles.api_btn} btn`} onClick={() => this.loadTableData('comments')}>Comments</button>
        <button className={`${styles.api_btn} btn`} onClick={() => this.loadTableData('albums')}>Albums</button>
        <DataTable headers={headers} data={data} />
    </div>
    );
  }
}
