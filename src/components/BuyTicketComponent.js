
import {
    Tabs,
    Select
} from 'antd';

import "../css/buyTicketComponent.css"

const { TabPane } = Tabs;
const { Option } = Select;

const listFilm = [
    {
        title: 'GODZILLA vs KONG',
        subTitle: 'GODZILLA ĐẠI CHIẾN KONG',
        image:
            'https://firebasestorage.googleapis.com/v0/b/film-84edf.appspot.com/o/phim6.jpg?alt=media&token=21c40a0b-c0fb-4478-8a54-60d73ecf0e85',
    },
    {
        title: 'THE UNHOLY',
        subTitle: 'Ấn quỷ',
        image:
            'https://firebasestorage.googleapis.com/v0/b/film-84edf.appspot.com/o/phim2.jpg?alt=media&token=14f5caa7-49b1-4bac-980d-bb0307e71651',
    },
    {
        title: 'Bố già',
        subTitle: 'Bố già',
        image:
            'https://firebasestorage.googleapis.com/v0/b/film-84edf.appspot.com/o/phim3.jpg?alt=media&token=df0a6f6d-20b5-4be5-bccb-885337e25b3c',
    },
    {
        title: 'Song song',
        subTitle: 'Song song',
        image:
            'https://firebasestorage.googleapis.com/v0/b/film-84edf.appspot.com/o/phim1.jpg?alt=media&token=894e1a44-65cd-4950-987d-9ffb3736df91',
    },
];

const listTheater = [
    {
        key: 'hoaKhanh',
        value: 'Hòa Khánh',
    },
    {
        key: 'hoaKhanh',
        value: 'Hòa Khánh',
    },
];


function callback(key) {
    console.log(key);
}

const onChange = (value) => {
    console.log(`selected ${value}`);
};

const onBlur = () => {
    console.log('blur');
};

const onFocus = () => {
    console.log('focus');
};

const onSearch = (val) => {
    console.log('search:', val);
};


const BuyTicket = () => {
    return (

        <div className="box-buy-ticket">
            <div className="label-tab">Mua vé nhanh</div>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Theo phim" key="3">
                    <Select
                        showSearch
                        defaultValue="all"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        }
                    >
                        <Option value="all">Chọn phim</Option>
                        {listFilm.map((data, index) => (
                            <Option value={data.key} key={`phim-${index}`}>
                                {data.title}
                            </Option>
                        ))}
                    </Select>

                    <Select
                        showSearch
                        defaultValue="all"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        }
                    >
                        <Option value="all">Chọn rạp</Option>
                        {listTheater.map((data, index) => (
                            <Option value={data.key} key={`rap-${index}`}>
                                {data.value}
                            </Option>
                        ))}
                    </Select>

                    <Select
                        showSearch
                        style={{ width: '32%' }}
                        defaultValue="all"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        }
                    >
                        <Option value="all">Chọn ngày</Option>
                        {listTheater.map((data, index) => (
                            <Option value={data.key} key={`rap-1-${index}`}>
                                {data.value}
                            </Option>
                        ))}
                    </Select>


                    <Select
                        showSearch
                        style={{ width: '32%' }}
                        defaultValue="all"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        }
                    >
                        <Option value="all">Chọn suất</Option>
                        {listTheater.map((data, index) => (
                            <Option value={data.key} key={`rap-2-${index}`}>
                                {data.value}
                            </Option>
                        ))}
                    </Select>

                </TabPane>
                <TabPane tab="Theo ngày" key="4">
                    <Select
                        showSearch
                        style={{ width: '32%' }}
                        defaultValue="all"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        }
                    >
                        <Option value="all">Chọn phim</Option>
                        {listFilm.map((data, index) => (
                            <Option value={data.key} key={`phim-1-${index}`}>
                                {data.title}
                            </Option>
                        ))}
                    </Select>

                    <Select
                        showSearch
                        style={{ width: '32%' }}
                        defaultValue="all"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        }
                    >
                        <Option value="all">Chọn rạp</Option>
                        {listTheater.map((data, index) => (
                            <Option value={data.key} key={`rap-3-${index}`}>
                                {data.value}
                            </Option>
                        ))}
                    </Select>


                    <Select
                        showSearch
                        style={{ width: '32%' }}
                        defaultValue="all"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        }
                    >
                        <Option value="all">Chọn ngày</Option>
                        {listTheater.map((data, index) => (
                            <Option value={data.key} key={`rap-4-${index}`}>
                                {data.value}
                            </Option>
                        ))}
                    </Select>

                    <Select
                        showSearch
                        style={{ width: '32%' }}
                        defaultValue="all"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        }
                    >
                        <Option value="all">Chọn suất</Option>
                        {listTheater.map((data, index) => (
                            <Option value={data.key} key={`rap-5-${index}`}>
                                {data.value}
                            </Option>
                        ))}
                    </Select>
                </TabPane>
                <TabPane tab="Theo rạp" key="5">
                    <Select
                        showSearch
                        style={{ width: '32%' }}
                        defaultValue="all"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        }
                    >
                        <Option value="all">Chọn phim</Option>
                        {listFilm.map((data, index) => (
                            <Option value={data.key} key={`phim-2-${index}`}>
                                {data.title}
                            </Option>
                        ))}
                    </Select>

                    <Select
                        showSearch
                        style={{ width: '32%' }}
                        defaultValue="all"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        }
                    >
                        <Option value="all">Chọn rạp</Option>
                        {listTheater.map((data, index) => (
                            <Option value={data.key} key={`rap-6-${index}`}>
                                {data.value}
                            </Option>
                        ))}
                    </Select>

                    <Select
                        showSearch
                        style={{ width: '32%' }}
                        defaultValue="all"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        }
                    >
                        <Option value="all">Chọn ngày</Option>
                        {listTheater.map((data, index) => (
                            <Option value={data.key} key={`rap-7-${index}`}>
                                {data.value}
                            </Option>
                        ))}
                    </Select>

                    <Select
                        showSearch
                        style={{ width: '32%' }}
                        defaultValue="all"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                            0
                        }
                    >
                        <Option value="all">Chọn suất</Option>
                        {listTheater.map((data, index) => (
                            <Option value={data.key} key={`rap-8-${index}`}>
                                {data.value}
                            </Option>
                        ))}
                    </Select>
                </TabPane>
            </Tabs>
            <a href="/bookTicket" className="btn fl-right">
                MUA VÉ
            </a>
        </div>
    )
}

export default BuyTicket;