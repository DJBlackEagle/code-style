import { base } from './base';

interface CommitlintConfig {
  parserPreset: string;
  rules: {
    'body-leading-blank': [number, string];
    'body-max-line-length': [number, string, number];
    'footer-leading-blank': [number, string];
    'footer-max-line-length': [number, string, number];
    'header-max-length': [number, string, number];
    'subject-case': [number, string, string[]];
    'subject-empty': [number, string];
    'subject-full-stop': [number, string, string];
    'type-case': [number, string, string];
    'type-empty': [number, string];
    'type-enum': [number, string, string[]];
  };
  prompt: {
    questions: {
      type: {
        description: string;
        enum: Record<
          string,
          { description: string; title: string; emoji: string }
        >;
      };
      scope: { description: string };
      subject: { description: string };
      body: { description: string };
      isBreaking: { description: string };
      breakingBody: { description: string };
      breaking: { description: string };
      isIssueAffected: { description: string };
      issuesBody: { description: string };
      issues: { description: string };
    };
  };
}

describe('base', () => {
  it('should return the correct commitlint configuration', async () => {
    const config = (await base()) as CommitlintConfig;
    expect(config).toHaveProperty(
      'parserPreset',
      'conventional-changelog-conventionalcommits',
    );
    expect(config).toHaveProperty('rules');
    expect(config.rules).toHaveProperty('body-leading-blank', [1, 'always']);
    expect(config.rules).toHaveProperty('body-max-line-length', [
      2,
      'always',
      150,
    ]);
    expect(config.rules).toHaveProperty('footer-leading-blank', [1, 'always']);
    expect(config.rules).toHaveProperty('footer-max-line-length', [
      2,
      'always',
      100,
    ]);
    expect(config.rules).toHaveProperty('header-max-length', [
      2,
      'always',
      100,
    ]);
    expect(config.rules).toHaveProperty('subject-case', [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ]);
    expect(config.rules).toHaveProperty('subject-empty', [2, 'never']);
    expect(config.rules).toHaveProperty('subject-full-stop', [2, 'never', '.']);
    expect(config.rules).toHaveProperty('type-case', [
      2,
      'always',
      'lower-case',
    ]);
    expect(config.rules).toHaveProperty('type-empty', [2, 'never']);
    expect(config.rules).toHaveProperty('type-enum', [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ]);
    expect(config).toHaveProperty('prompt');
    expect(config.prompt).toHaveProperty('questions');
    expect(config.prompt.questions).toHaveProperty('type');
    expect(config.prompt.questions.type).toHaveProperty(
      'description',
      'Select the type of change that you are committing',
    );
    expect(config.prompt.questions.type).toHaveProperty('enum');
    expect(config.prompt.questions.type.enum).toHaveProperty('feat');
    expect(config.prompt.questions.type.enum.feat).toHaveProperty(
      'description',
      'A new feature',
    );
    expect(config.prompt.questions.type.enum.feat).toHaveProperty(
      'title',
      'Features',
    );
    expect(config.prompt.questions.type.enum.feat).toHaveProperty(
      'emoji',
      '✨',
    );
    // ...additional checks for other enum values and properties...
  });
});
