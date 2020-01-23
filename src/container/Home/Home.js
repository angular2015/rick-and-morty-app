import React, { Component } from 'react';
import httpInstance from '../../axios';
import List from '../../component/List/List';
import Spinner from '../../component/Spinner/Spinner';
import Input from '../../component/Input/Input';
import Filter from '../../component/Filter/Filter';
class Home extends Component {
    state = {
        data: [],
        filterUser: [],
        error: false,
        selectedFilter: "",
        searchVal: '',
        SelectVal: ''
    }
    componentDidMount() {
        httpInstance.get("/character")
            .then((response) => {
                console.log(response.data)
                this.setState({ data: response.data, filterUser: response.data.results })
            }).catch(error => {
                this.setState({ error: true })
            });
    }
    inputChangeHandler = (event) => {
        this.Searchdata(event.target.value);
    }
    filterHandler = (event) => {
        this.Searchdata(event.target.innerText);
        this.setState({ selectedFilter: event.target.innerText, SelectVal: 'Ascending' });
    }
    handleChange = (event) => {
        const update = {
            ...this.state.filterUser
        }
        let reverse;
        if (event.target.value !== this.state.SelectVal) {
            reverse = Object.assign([], update).reverse();
        }
        this.setState({ SelectVal: event.target.value });
        this.setState({ filterUser: reverse });
    }
    clearFilter = () => {
        this.setState({ selectedFilter: '' });
        this.setState({ filterUser: this.state.data.results, SelectVal: "Ascending" });
    }
    Searchdata = (val) => {
        let listData = this.state.data.results
        if (listData) {
            let finalData = listData.filter(result => {
                if (val === "Human" || val === "Alien") {
                    return result.species.toUpperCase().indexOf(val.toUpperCase()) > -1;
                } else if (val === "Male" || val === "Female") {
                    return result.gender.toUpperCase() === val.toUpperCase();
                } else {
                    return result.name.toUpperCase().indexOf(val.toUpperCase()) > -1;
                }
            })
            const updateIng = {
                ...this.state.data,
                ...this.state.filterUser
            }
            if (finalData) {
                updateIng.filterUser = finalData;
                this.setState({ filterUser: updateIng.filterUser, SelectVal: "Ascending" });
            }

        }
    }

    render() {
        let list = this.props.error ? <p>Something went wrong</p> : <Spinner />
        if (this.state.data.results) {
            list = (
                <>
                    <Filter filter={(event) => this.filterHandler(event)}
                        selectedFilter={this.state.selectedFilter}
                        name="sort" value={this.state.SelectVal}
                        handleChange={this.handleChange}
                        clearFilter={() => this.clearFilter()} />
                    <Input changed={(event) => this.inputChangeHandler(event)} />
                    <div style={{ clear: "both" }}></div>
                    <List data={this.state.filterUser}></List>
                </>
            )
        }
        return (
            <>
                {list}
            </>
        )
    }
}


export default Home;