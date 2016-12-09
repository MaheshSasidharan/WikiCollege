# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161121002716) do

  create_table "comments", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "post_id"
    t.integer  "user_id"
    t.text     "commentData", limit: 65535
    t.decimal  "like",                      precision: 10, default: 0
    t.decimal  "dislike",                   precision: 10, default: 0
    t.boolean  "isActive",                                 default: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["post_id"], name: "index_comments_on_post_id", using: :btree
    t.index ["user_id"], name: "index_comments_on_user_id", using: :btree
  end

  create_table "departments", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "deptName"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "groups", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "university_id"
    t.integer  "user_id"
    t.text     "desc",          limit: 65535
    t.string   "groupName"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["university_id"], name: "index_groups_on_university_id", using: :btree
    t.index ["user_id"], name: "index_groups_on_user_id", using: :btree
  end

  create_table "posts", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "group_id"
    t.integer  "user_id"
    t.text     "postData",   limit: 65535
    t.decimal  "like",                     precision: 10, default: 0
    t.decimal  "dislike",                  precision: 10, default: 0
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["group_id"], name: "index_posts_on_group_id", using: :btree
    t.index ["user_id"], name: "index_posts_on_user_id", using: :btree
  end

  create_table "univdepts", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "university_id"
    t.integer  "department_id"
    t.text     "desc",          limit: 65535
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["department_id"], name: "index_univdepts_on_department_id", using: :btree
    t.index ["university_id"], name: "index_univdepts_on_university_id", using: :btree
  end

  create_table "universities", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.text     "desc",           limit: 65535
    t.string   "city"
    t.string   "state"
    t.decimal  "zip",                          precision: 10
    t.string   "name"
    t.string   "collegeType"
    t.decimal  "rank",                         precision: 10
    t.decimal  "acceptanceRate",               precision: 10
    t.decimal  "enrollment",                   precision: 10
    t.decimal  "arrTuition",                   precision: 10
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name"
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
