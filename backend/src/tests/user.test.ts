import { IUserInput } from "./../utils/auth.interface";
import app from "../app";
import { faker } from "@faker-js/faker";
import request from "supertest";

const newUser: IUserInput = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: "Pa55Word2*44",
};

describe("Auth Routes", () => {
  describe("SUCCESS", () => {
    it("it should successful register a user", async () => {
      const res = await request(app)
        .post("/api/v1/auth/register")
        .send(newUser);
      expect(res).toHaveProperty("status", 201);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "registration successful");
    });

    it("it should successful log a user in and return a token", async () => {
      const res = await request(app)
        .post("/api/v1/auth/login")
        .send({ email: newUser.email, password: newUser.password });
      expect(res).toHaveProperty("status", 200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "login successful");
    });
  });

  describe("ERROR", () => {
    it("it should fail to register a user with an email that already exists", async () => {
      const res = await request(app)
        .post("/api/v1/auth/register")
        .send(newUser);
      expect(res).toHaveProperty("status", 409);
      expect(res.body).toHaveProperty("status", "error");
      expect(res.body).toHaveProperty("message", "Invalid email");
    });

    it("it should fail to register a user with missing required parameters", async () => {
      const res = await request(app).post("/api/v1/auth/register").send({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
      });
      expect(res).toHaveProperty("status", 422);
      expect(res.body).toHaveProperty("status", "error");
      expect(res.body).toHaveProperty("message", "password is required");
    });

    it("it should fail to register a user with less secure password", async () => {
      const res = await request(app).post("/api/v1/auth/register").send({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
      });
      expect(res).toHaveProperty("status", 422);
      expect(res.body).toHaveProperty("status", "error");
      expect(res.body).toHaveProperty(
        "message",
        "Password must contain a minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      );
    });

    it("it should fail to log a user with wrong credentials in", async () => {
      const res = await request(app)
        .post("/api/v1/auth/login")
        .send({ email: newUser.email, password: faker.internet.password() });
      expect(res).toHaveProperty("status", 400);
      expect(res.body).toHaveProperty("status", "error");
      expect(res.body).toHaveProperty("message", "invalid credentials");
    });
  });
});
