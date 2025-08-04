import React, { useState } from 'react';

interface ControlProps {
  onSearch: (keyword: string) => void;
  onSort: (option: string) => void;
  onAddNew: () => void;
}

const Control: React.FC<ControlProps> = ({ onSearch, onSort, onAddNew }) => {
  const [keyword, setKeyword] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(keyword);
  };

  return (
    <div className="row search my-2 align-items-center justify-content-between py-2">
      <div className="col-sm-6 col-12">
        <form 
          className="d-flex flex-nowrap me-2" 
          role="search"
          onSubmit={handleSearch}
        >
          <input
            className="form-control me-2 rounded-0"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button
            className="btn btn-outline-success rounded-0"
            type="submit"
          >
            Tìm kiếm
          </button>
        </form>
      </div>
      <div className="col-sm-3 col-6 mt-2 mt-sm-0 d-flex align-items-center">
        <select 
          className="form-control rounded-0" 
          onChange={(e) => onSort(e.target.value)}
          defaultValue=""
        >
          <option value="">Sắp xếp</option>
          <option value="name_asc">Tên A-Z</option>
          <option value="name_desc">Tên Z-A</option>
        </select>
      </div>
      <div className="col-sm-3 col-6 mt-2 mt-sm-0 text-end">
        <button
          type="button"
          className="btn btn-primary rounded-0"
          onClick={onAddNew}
        >
          Thêm mới sinh viên
        </button>
      </div>
    </div>
  );
};

export default Control;