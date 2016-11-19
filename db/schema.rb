# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20161113213717) do

  create_table "comments", force: true do |t|
    t.integer  "post_id"
    t.integer  "user_id"
    t.text     "commentData"
    t.decimal  "like",        precision: 10, scale: 0
    t.decimal  "dislike",     precision: 10, scale: 0
    t.boolean  "isActive",                             default: false
    t.datetime "createdTime"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "comments", ["post_id"], name: "index_comments_on_post_id", using: :btree
  add_index "comments", ["user_id"], name: "index_comments_on_user_id", using: :btree

  create_table "departments", force: true do |t|
    t.string   "deptName"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "groups", force: true do |t|
    t.integer  "university_id"
    t.integer  "user_id"
    t.text     "desc"
    t.string   "groupName"
    t.datetime "createdTime"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "groups", ["university_id"], name: "index_groups_on_university_id", using: :btree
  add_index "groups", ["user_id"], name: "index_groups_on_user_id", using: :btree

  create_table "posts", force: true do |t|
    t.integer  "group_id"
    t.integer  "user_id"
    t.text     "postData"
    t.decimal  "like",        precision: 10, scale: 0
    t.decimal  "dislike",     precision: 10, scale: 0
    t.boolean  "isClosed",                             default: false
    t.boolean  "isActive",                             default: false
    t.datetime "createdTime"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "posts", ["group_id"], name: "index_posts_on_group_id", using: :btree
  add_index "posts", ["user_id"], name: "index_posts_on_user_id", using: :btree

  create_table "submajors", force: true do |t|
    t.integer  "univdept_id"
    t.text     "desc"
    t.string   "majorName"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "submajors", ["univdept_id"], name: "index_submajors_on_univdept_id", using: :btree

  create_table "univdepts", force: true do |t|
    t.integer  "university_id"
    t.integer  "department_id"
    t.text     "desc"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "univdepts", ["department_id"], name: "index_univdepts_on_department_id", using: :btree
  add_index "univdepts", ["university_id"], name: "index_univdepts_on_university_id", using: :btree

  create_table "universities", force: true do |t|
    t.text     "desc"
    t.string   "city"
    t.string   "state"
    t.decimal  "zip",            precision: 10, scale: 0
    t.string   "name"
    t.string   "collegeType"
    t.decimal  "rank",           precision: 10, scale: 0
    t.decimal  "acceptanceRate", precision: 10, scale: 0
    t.decimal  "enrollment",     precision: 10, scale: 0
    t.decimal  "arrTuition",     precision: 10, scale: 0
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "user_id"
    t.string   "email"
    t.decimal  "reputationPoints", precision: 10, scale: 0
    t.datetime "createdTime"
    t.datetime "created_at",                                null: false
    t.datetime "updated_at",                                null: false
    t.string   "session_token"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree

end
